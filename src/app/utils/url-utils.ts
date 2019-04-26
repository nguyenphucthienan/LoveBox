export class UrlUtils {

  static resolvePathVariables(url: string, variables: any): string {
    let returnUrl = url;
    for (const key in variables) {
      if (variables.hasOwnProperty(key)) {
        returnUrl = returnUrl.replace(`{${key}}`, variables[key]);
      }
    }

    return returnUrl;
  }

}
