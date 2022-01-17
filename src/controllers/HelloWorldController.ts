import {BodyParams} from "@tsed/common";
import {Controller} from "@tsed/di";
import {JsonRequestBody, Post} from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  @Post("/")
  post(@BodyParams() body: JsonRequestBody) {
    console.log(body);

    const json = body.toJSON();

    return {OK: true, json};
  }
}
