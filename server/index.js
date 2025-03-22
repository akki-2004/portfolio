const express =require( "express");
const nodemailer =require( "nodemailer");
const cors =require( "cors");
const dotenv =require( "dotenv");


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, 
      pass: process.env.PASSWORD, 
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
