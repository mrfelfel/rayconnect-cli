import { flags } from '@oclif/command'
import Command from '../base'
import * as fs from 'fs';
import * as path from 'path';
export default class Login extends Command {
  static description = 'login to rayconnect cli'

  static examples = [
    `$ rayconnect-cli login`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [{ name: 'username' }, { name: 'password' }]

  async run() {
    const { args } = this.parse(Login)





    try {


      this.rayconnect.OnConnect(async () => {
        this.log("connected to server")


        const { username, password } = args
        if ((username) && (password)) {
          const logged: any = await this.rayconnect.LoginWithPassword({
            username, password
          })

          if (logged['status'] == false) {

            this.log("login failed")
          }
        } else {
          const logged = await this.rayconnect.Guest()

          this.log("logged as guest")
          await this.rayconnect.Auth(logged.data.token)
          const data = JSON.stringify(logged);

          // make config folder
          fs.existsSync(this.config.dataDir) || fs.mkdirSync(this.config.dataDir);


          fs.writeFile(path.join(this.config.dataDir, "user.json"), data, function (err) {
            if (err) {
              console.log('There has been an error saving your configuration data.');
              console.log(err.message);
              return;
            }
            console.log('Configuration saved successfully.')
          });


        }

        this.rayconnect.socket.close()
      })

    } catch (error) {

    }
  }
}
