const { client } = require("@/utils/database");

const Portfolio = client.db("itinstitute").collection("Portfolio");

export const GET = async (req) => {
  try {
    const url = new URL(req?.url);
    const path = url.pathname.split("/")[3];
    const name = decodeURI(path);
    const portfolio = await Portfolio.findOne({ name: name });
    return Response.json(
      {
        success: true,
        message: "Successfull",
        data: portfolio,
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
