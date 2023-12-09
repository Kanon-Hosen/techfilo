import { client } from "@/utils/database";
import * as jwt from "jsonwebtoken";

const Testimonails = client.db("itinstitute").collection("Testimonial");

export const GET = async () => {
  try {
    const testi = await Testimonails.find({}).toArray();
    const mainData = [...testi].reverse();
    return Response.json(
      {
        success: true,
        message: "successfully get data",
        data: mainData,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
      data: [],
    });
  }
};

export const POST = async (req) => {
  const BearerToken = await req?.headers.get("authorization");
  const email = await req?.headers.get("email");
  const token = BearerToken?.split(" ")[1];
  console.log(token);
  if (!email) {
    return Response.json({ errorMessage: "Email not found" }, { status: 404 });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decode) => {
    if (err) {
      return Response.json(
        { errorMessage: "Unauthorized user" },
        { status: 401 }
      );
    }
    const decodedEmail = decode?.email;
    console.log("d", decodedEmail);
    if (decodedEmail !== email) {
      return Response.json(
        { errorMessage: "Unauthorized user" },
        { status: 401 }
      );
    }
  });
  try {
    const body = await req?.json();
    const data = await Testimonails.insertOne(body);
    return Response.json(
      {
        success: true,
        message: data?.acknowledged,
        data: data,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({
      success: false,
      message: error?.message,
      data: null,
    });
  }
};
