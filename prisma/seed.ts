import prisma from "../src/config/database.js";

async function main() {
    await prisma.cars.createMany({
        data: [
            {
                "id": 1,
                "model": "HB20",
                "licensePlate": "ABC9090",
                "year": 2001,
                "color": "AZUL",
                "createAt": "2023-01-26T15:54:28.178Z"
            },
            {
                "id": 2,
                "model": "SONATA",
                "licensePlate": "EZD3035",
                "year": 2010,
                "color": "PRETO",
                "createAt": "2023-01-26T15:54:28.178Z"
            },
            {
                "id": 3,
                "model": "X1",
                "licensePlate": "FBI2231",
                "year": 2018,
                "color": "BRANCO",
                "createAt": "2023-01-26T15:54:28.178Z"
            },
            {
                "id": 4,
                "model": "CIVIC",
                "licensePlate": "LPA1019",
                "year": 2021,
                "color": "CINZA",
                "createAt": "2023-01-26T15:54:28.178Z"
            },
            {
                "id": 5,
                "model": "ONIX",
                "licensePlate": "HFA2713",
                "year": 2023,
                "color": "AMARELO",
                "createAt": "2023-01-26T15:54:28.178Z"
            },
            {
                "id": 6,
                "model": "EVOLUTION",
                "licensePlate": "EPR6655",
                "year": 2005,
                "color": "CINZA",
                "createAt": "2023-01-26T15:54:28.178Z"
            },
            {
                "id": 7,
                "model": "UNO",
                "licensePlate": "DMP7935",
                "year": 2000,
                "color": "PRETO",
                "createAt": "2023-01-26T15:54:28.178Z"
            },
            {
                "id": 8,
                "model": "320i",
                "licensePlate": "LAS5546",
                "year": 2017,
                "color": "BRANCO",
                "createAt": "2023-01-26T15:54:28.178Z"
            }
        ]
    })
}

main()
    .then(() => {
        console.log("Registro feito com sucesso!");
    })
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })