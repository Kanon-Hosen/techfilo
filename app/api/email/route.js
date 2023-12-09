import Email from "@/components/Email/email";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export const POST = async (req) => {
  const body = await req?.json();
  console.log(body);
  const emailHtml = render(<Email url="https://example.com" />);

  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "kamrul6658@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    const options = {
      from: "TechFilo.com <kanon5866@gmail.com>",
      to: "kanon5866@gmail.com",
      subject: "Messaged from TechFilo.com",
      html: emailHtml,
    };

    const data = await transporter.sendMail(options);
    return Response.json(data);
  } catch (error) {
    return Response.json(error.message);
  }
};
