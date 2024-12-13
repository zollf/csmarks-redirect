// https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html#functions-event-structure-request
function handler(event) {
  if (typeof event.request.headers.host === "object" && event.request.headers.host.value.startsWith("csmarks.link")) {
    return {
      statusCode: 308,
      headers: {
        location: { value: "https://www.csmarks.link" }
      }
    }
  }
  
  if (event.request.cookies['auto_redirect']) {
    return {
      statusCode: 302,
      headers: {
        location: { value: "https://secure.csse.uwa.edu.au/run/csmarks" }
      }
    }
  }

  return event.request;
}