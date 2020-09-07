import { flags } from '@oclif/command'
import Command from '../base'
export default class Me extends Command {
  static description = 'user status rayconnect cli'

  static examples = [
    `$ rayconnect-cli me`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
  }


  async run() {





    try {

      this.log(`Hello ${this.rayconnect.user.uid} !`)

      this.rayconnect.socket.close()

    } catch (error) {

    }
  }
}
