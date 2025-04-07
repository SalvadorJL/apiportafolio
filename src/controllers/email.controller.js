import nodemailer from 'nodemailer'

export const enviarEmail = async (req, res) => {
  const { nombre, email, asunto, mensaje } = req.body
  console.log(req.body);
  
  try {
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Nuevo mensaje de ${nombre}`,
        html: `
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Asunto:</strong> ${asunto}</p>
          <p><strong>Correo:</strong> ${email}</p>
          <p><strong>Mensaje:</strong> ${mensaje}</p>
        `
      };

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Correo enviado correctamente', })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error al enviar correo' })
  }
}
