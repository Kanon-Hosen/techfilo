import { client } from "@/utils/database";
import * as jwt from "jsonwebtoken";

const Company = client.db("itinstitute").collection("Company");
export const GET = async (req) => {
  try {
    const query = {};
    const data = await Company.find(query).toArray();
    return Response.json(
      {
        success: true,
        message: "successfully get data",
        data: data,
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
    const data = await Company.insertOne(body);
    return Response.json(
      {
        success: true,
        message: "success",
        data: data,
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
