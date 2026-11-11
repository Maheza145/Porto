import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Nama, email, dan pesan wajib diisi." },
        { status: 400 }
      );
    }

    // Catatan untuk Resend free tier:
    // Email pengirim default menggunakan onboarding@resend.dev
    // Email penerima dikirimkan ke email terdaftar di Resend (eggamaheza@gmail.com)
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["eggamaheza@gmail.com"],
      replyTo: email,
      subject: `[Portfolio] ${subject || "Pesan Baru"} dari ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e8e2db; border-radius: 12px; background-color: #faf8f5;">
          <h2 style="color: #2c2825; margin-bottom: 16px; border-bottom: 2px solid #c4956a; padding-bottom: 8px;">Pesan Baru dari Portfolio</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #6b6560; width: 80px;"><strong>Nama:</strong></td>
              <td style="padding: 8px 0; color: #2c2825;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b6560;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #2c2825;"><a href="mailto:${email}" style="color: #c4956a;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b6560;"><strong>Subjek:</strong></td>
              <td style="padding: 8px 0; color: #2c2825;">${subject || "-"}</td>
            </tr>
          </table>

          <div style="background-color: #ffffff; padding: 18px; border-radius: 8px; border: 1px solid #e8e2db;">
            <p style="color: #6b6560; font-size: 13px; margin-top: 0; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Isi Pesan:</p>
            <p style="color: #2c2825; line-height: 1.6; white-space: pre-wrap; margin-bottom: 0;">${message}</p>
          </div>

          <p style="color: #9b9590; font-size: 12px; margin-top: 24px; text-align: center;">
            Email ini dikirim otomatis melalui form kontak website portfolio Anda.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (err) {
    console.error("Server error:", err);
    return Response.json(
      { error: "Terjadi kesalahan internal pada server." },
      { status: 500 }
    );
  }
}

