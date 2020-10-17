const axios = require("axios");

exports.getByCategoryHandler = async (event) => {
  if (event.httpMethod !== 'GET') {
    throw new Error(`getMethod only accept GET method, you tried: ${event.httpMethod}`);
  }
 
  // Get category from pathParameters from APIGateway because of `/categories/{category}` at template.yml
  const category = event.pathParameters.category;

  try {
    //fetching category data using axios
    const categoryFetchedData = await axios.get(`https://www.cubyt.io/data/categories/${category}`);
      
    //forming success response along with category data for API gateway
    const response = {
      statusCode: 200,
      body: JSON.stringify(categoryFetchedData.data)
    };

    console.log(categoryFetchedData.data);

    //returning response to API gateway
    return response;

  } catch (error) {
    
    console.error(error);

    //forming error response for API gateway
    const response = {
      statusCode: 500,
      body: JSON.stringify(error)
    };

    //returning response to API gateway
    return response;
  }
}
