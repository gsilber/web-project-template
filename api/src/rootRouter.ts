import { EFCRouter, Route } from "@gsilber/express-ts-framework";

export class RootRouter extends EFCRouter {
	private static routes:Route[]=[];
  constructor() {
	super(RootRouter.routes);
  }
}