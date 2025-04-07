import nodemailer from 'nodemailer'

export const enviarEmail = async (req, res) => {
  const { nombre, email, mensaje } = req.body

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // o el que uses
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Nuevo mensaje de ${nombre}`,
      text: mensaje
    })

    res.status(200).json({ message: 'Correo enviado correctamente' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error al enviar correo' })
  }
}
