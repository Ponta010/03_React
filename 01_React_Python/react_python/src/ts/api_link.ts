import { dark } from '@mui/material/styles/createPalette';
import axios from 'axios';

/**
 * API通信クラス
 */
export class ApiLink{

    /**
     * 運転ログCSVをPythonサーバーへ送る
     * @param {string} file CSV1ファイル名称
     * @returns 
     */
    public async handleSubmit(file:string) {
        try{
            // クエリパラメータでCSVファイル名称を送る
            const url = "http://localhost:5000/?csv=" + file;
            const Response = await axios.get(url);
            console.log("ApiLink Response = " + Response.data);
            return Response.data;
        }catch(error){
            console.log("Python Server Error." + error);
        }
    }

}