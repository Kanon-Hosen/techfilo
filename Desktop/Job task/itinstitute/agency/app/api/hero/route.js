import { client } from "@/utils/database";
import * as jwt from "jsonwebtoken";

const Hero = client.db("itinstitute").collection("Hero");
export const GET = async () => {
  try {
    const query = {};
    const hero = await Hero.find(query).toArray();
    return Response.json(
      {
        success: true,
        message: "Successfully get data",
        data: hero,
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

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decode) => {
    if (err) {
      return Response.json(
        { errorMessage: "Unauthorized user" },
        { status: 401 }
      );
    }
    const decodedEmail = decode?.email;
    if (decodedEmail !== email) {
      return Response.json(
        { errorMessage: "Unauthorized user" },
        { status: 401 }
      );
    }
  });
  try {
    const body = await req?.json();
    const hero = await Hero.insertOne(body);
    return Response.json(
      {
        success: true,
        message: "Success",
        data: hero,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};
