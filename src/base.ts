// src/base.ts
import { Command, flags } from '@oclif/command';
import { Input, OutputArgs, OutputFlags } from '@oclif/parser';
import Rayconnect from 'rayconnect-client'
import * as fs from 'fs';
import * as path from 'path';

export default abstract class BaseCommand extends Command {
  static flags = {
    help: flags.help({ char: 'h' })
  };

  static args: any
  rayconnect!: Rayconnect;
  user: any

  protected parsedArgs?: OutputArgs<any>;
  protected parsedFlags?: OutputFlags<typeof BaseCommand.flags>;

  async init(): Promise<void> {
    const { args, flags } = this.parse(this.constructor as Input<typeof BaseCommand.flags>);
    this.parsedArgs = args;
    this.parsedFlags = flags;

    let user
    if (fs.existsSync(this.config.dataDir)) {
      user = fs.readFileSync(path.join(this.config.dataDir, "user.json"),
        { encoding: 'utf8', flag: 'r' });


      user = JSON.parse(user)
    } else {
      this.log("please login ...")
    }

    this.user = user

    this.rayconnect = new Rayconnect({
      scopes: "main",
      appID: "rayconnect",
      space: "main",
      type: "client"
    }, undefined, true)


    return new Promise((resolve, reject) => {
      this.rayconnect.OnConnect(async () => {

        try {
          if (this.user) {
            await this.rayconnect.Auth(this.user.data.token)

          }
          resolve()
        } catch (error) {

          reject(error)
        }

        clearTimeout(timeout)
      })

      const timeout = setTimeout(() => {

        reject("can not connect to server")
      }, 30000);
    })

  }
}
