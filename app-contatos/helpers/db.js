import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("contatos.db");

export const init = () =>{
    const promise = new Promise((resolve, reject)=>{

        db.transaction((tx)=>{
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS tb_contato (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, numero INTEGER NOT NULL, imageUri TEXT NOT NULL, lat REAL, lng REAL, data TEXT);',
                [],
                ()=>{resolve()},
                (_,err)=>{reject(err)}
            );
        });
    });
    return promise;
}

export const inserirContato = (nomeContato, numeroContato, imageUri, latContato, lngContato, dataContato)=>{
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
                tx.executeSql(
                'INSERT INTO tb_contato (nome, numero, imageUri, lat, lng, data) VALUES(?,?,?,?,?,?);',
                [nomeContato, numeroContato, imageUri, latContato, lngContato, dataContato],
                (_,resultado)=>{resolve(resultado)},
                (_,err)=>{reject(err)}
            );
        });
    });
    return promise;
}

export const buscarContatos =()=>{
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                'SELECT * FROM tb_contato',
                [],
                (_,resultado)=>{resolve(resultado)},
                (_,err)=>{reject(err)}
            );
        });
    });
    return promise;
};