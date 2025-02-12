import nodemailer from 'nodemailer'

export async function POST(req) {
    try {
        // Parse request body (json)
        const { firstName, lastName, email, phone, companyName, selectedServices, description } = await req.json();

        // Default subject
        let subject = "New E-Ovation Norm Submission";

        // Check if services is provided
        if (selectedServices) {
            if (Array.isArray(selectedServices) && selectedServices.length > 0) {
                subject = selectedServices[0];
            } else if (typeof selectedServices === "string" && selectedServices.trim() != '') {
                subject = selectedServices;
            }
        }

        const htmlBody = `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; font-size:1rem">
          <h2 style="color: #444;">Form Submission from E-Ovation Website</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone Number:</strong> ${phone.split("-").join(" ")}</p>` : ''}
          ${companyName ? `<p style="text-transform: capitalize;"><strong>Company Name:</strong> ${companyName}</p>` : ''}
          ${selectedServices
                ? `<p style="text-transform: capitalize;"><strong>Services:</strong> ${Array.isArray(selectedServices) ? selectedServices.join(',<br/>&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;') : selectedServices
                }</p>`
                : ''
            }
          <p><strong>Message:</strong><br/>${description ? description.replace(/\n/g, '<br/>') : 'No additional message provided.'}</p>
        </div>
      `;

        // Transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SERVER_HOST,
            port: process.env.EMAIL_SERVER_PORT,
            secure: process.env.EMAIL_SERVER_SECURE === "true",
            auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD,
            }
        })

        // Set up email data
        const mailOptions = {
            from: `"E-Ovation Website" <${process.env.EMAIL_SERVER_USER}`, // sender email
            replyTo: email,
            to: process.env.CONTACT_EMAIL,
            subject: subject.replace(/^./, char => char.toUpperCase()),
            html: htmlBody,
        }

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info)

        return new Response(
            JSON.stringify({ success: true, message: "Email sent successfully." }), { status: 200 }
        )
    }
    catch (error) {
        console.log("Error sending email: ", error);
        return new Response(
            JSON.stringify({ success: false, error: error.message }), { status: 500 }
        )
    }
}