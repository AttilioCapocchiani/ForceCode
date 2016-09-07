import * as vscode from 'vscode';
import {Config} from './../forceCode';
import * as fs from 'fs-extra';

export default function getSetConfig(): Promise<Config> {
    return new Promise(function(resolve, reject){
        try {
            vscode.window.forceCode.config = fs.readJsonSync(vscode.workspace.rootPath + vscode.window.forceCode.pathSeparator + 'force.json');
            resolve(vscode.window.forceCode.config);
        } catch (err) {
            vscode.window.forceCode.config = {};
            reject(err);
        }
    });
}
