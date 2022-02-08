// @ts-ignore
import { NodeSSH } from "node-ssh";
import fs from "fs";
let hostConfig = fs.readFileSync( `${process.cwd()}/src/config/hostConfig.json` );
// @ts-ignore
let { host188Connect } = JSON.parse( hostConfig );

// const { host188Connect } = require( 'config/hostConfig.json' )
// import { Client, ConnectConfig, ClientChannel, SFTPWrapper, ExecOptions, PseudoTtyOptions } from 'ssh2';
// declare type Config = ConnectConfig & {
//     host?: string;
//     port?: number;
//     username?: string;
//     password?: string;
//     privateKey?: string;
//     passphrase?: string;
//     tryKeyboard?: boolean;
//     onKeyboardInteractive?: (
//         name: string,
//         instructions: string,
//         lang: string,
//         prompts: Prompt[],
//         finish: (responses: string[]) => void
//     ) => void;
// };

const ssh = new NodeSSH();
ssh.connect( host188Connect ).then( ( conn ) => {
    conn.execCommand( 'cat nohup.out |grep stoped' ).then( ( ls ) => {
        console.log( 'ls', ls )
    } )

} );
console.log( 'test' );
