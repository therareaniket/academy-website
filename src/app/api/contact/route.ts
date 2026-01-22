import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, course, message } = await request.json();

    // Validate all required fields
    if (!name || !email || !phone || !course || !message) {
      return NextResponse.json(
        {
          success: false,
          message: 'All fields are required'
        },
        { status: 400 }
      );
    }

    const FORM_ID = process.env.DHATU_ACADEMY_CF7_FORM || '263';
    const WORDPRESS_API = process.env.DHATU_ACADEMY_WORDPRESS_API;

    if (!WORDPRESS_API) {
      console.error('Missing DHATU_ACADEMY_WORDPRESS_API environment variable');
      return NextResponse.json(
        {
          success: false,
          message: 'Server configuration error'
        },
        { status: 500 }
      );
    }

    const CF7_ENDPOINT = `${WORDPRESS_API}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`;

    console.log('Connecting to:', CF7_ENDPOINT);

    // Use FormData instead of JSON for CF7 API
    const formData = new FormData();
    formData.append('your-name', name);
    formData.append('your-email', email);
    formData.append('your-phone', phone);
    formData.append('your-course', course);
    formData.append('your-message', message);
    
    // Add CF7 required hidden fields
    formData.append('_wpcf7', FORM_ID);
    formData.append('_wpcf7_version', '5.7.6');
    formData.append('_wpcf7_locale', 'en_US');
    formData.append('_wpcf7_unit_tag', `wpcf7-f${FORM_ID}-p1-o1`);
    formData.append('_wpcf7_container_post', '0');

    console.log('Sending to CF7 with FORM_ID:', FORM_ID);

    const wpResponse = await fetch(CF7_ENDPOINT, {
      method: 'POST',
      body: formData,
    });

    if (!wpResponse.ok) {
      console.error('WordPress API error:', wpResponse.status, wpResponse.statusText);
      const errorText = await wpResponse.text();
      console.error('WordPress error response:', errorText);
      
      return NextResponse.json(
        {
          success: false,
          message: `WordPress API error: ${wpResponse.status}`,
          details: process.env.NODE_ENV === 'development' ? errorText : undefined
        },
        { status: wpResponse.status }
      );
    }

    const result = await wpResponse.json();

    console.log('CF7 Response:', result);

    if (result.status === 'mail_sent') {
      return NextResponse.json(
        {
          success: true,
          message: result.message || 'Message sent successfully!'
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: result.message || 'Failed to send message',
          errors: result.invalid_fields
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Server error occurred';
    
    return NextResponse.json(
      {
        success: false,
        message: errorMessage
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
      'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    },
  });
}
