import { EFCApp } from "@gsilber/express-ts-framework";
import express from "express";
import { Config } from "./config";
import { RootRouter } from "./rootRouter";

class Server extends EFCApp {
	mainRouter:RootRouter=new RootRouter();
  constructor() {
	super(Config.port, Config.rootPath);
	this.AddRouter("/", this.mainRouter);
  }

  protected override initCors(): void {
	super.initCors();
  }
  override onBeforeInit(): void {
	super.onBeforeInit();
  }
  override onSetupComplete(): void {
	

  }
}

new Server().startServer(Config.title);

