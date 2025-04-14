export interface AjaxResponse {

	status: "ok" | "error",
	responseText?: string,
	errorText?: string,
	errorObject?: Error,
}
  