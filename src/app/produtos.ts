export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque:number;
    imagem: string;
}
export interface IProdutoCarrinho extends IProduto{
    quantidade:number;
}

export const produtos:IProduto[] = [
    { id: 1, descricao: "Mouse Gamer Redragon Cobra", preco: 99.99, descricaoPreco: "À vista no PIX", imagem: "https://images.kabum.com.br/produtos/fotos/94555/mouse-gamer-redragon-cobra-chroma-rgb-12400dpi-7-botoes-preto-m711-v2_1656018617_gg.jpg", quantidadeEstoque:10 },
    { id: 2, descricao: "Monitor LG 29' IPS, Ultra Wide", preco: 1299.99, descricaoPreco: "À vista no PIX", imagem: "https://images.kabum.com.br/produtos/fotos/97920/97920_5_1533849338_gg.jpg", quantidadeEstoque:10  },
    { id: 3, descricao: "Magic Keyboard Apple para Mac", preco: 1499.99, descricaoPreco: "À vista no PIX", imagem: "https://images.kabum.com.br/produtos/fotos/155537/teclado-magic-keyboard-apple-para-mac-bluetooth-com-teclado-numerico-e-conector-lightning-padrao-us-prata-mq052bz-a_1626109136_gg.jpg", quantidadeEstoque:10  },
    { id: 4, descricao: "Headset Razer BlackShark", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "https://images.kabum.com.br/produtos/fotos/183080/headset-gamer-razer-blackshark-v2-x-surround-7-1-drivers-50mm-p3-verde-rz04-03240600-r3u1_1634388949_gg.jpg", quantidadeEstoque:10  },
    { id: 5, descricao: "Razer Tetra-Wired Multiplataforma", preco: 44.99, descricaoPreco: "À vista no PIX", imagem: "https://images.kabum.com.br/produtos/fotos/166779/headset-gamer-razer-tetra-wired-multiplataforma-microfone-giratorio-preto-rz04-02920100-r3u1_1624628759_gg.jpg", quantidadeEstoque:10  },
    { id: 6, descricao: "Fone De Ouvido Xiaomi Mi", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/429511/Fone-De-Ouvido-Xiaomi-Mi-Redmi-Buds-4-Pro-Preto_1677073121_gg.jpg",  quantidadeEstoque:10 },
    { id: 7, descricao: "HD WD Purple Surveillance 4TB", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "https://images.kabum.com.br/produtos/fotos/292479/hd-wd-purple-4tb-surveillance-cache-256mb-3-5-sata-wd42purz_1641823191_gg.jpg", quantidadeEstoque:10  },
    { id: 8, descricao: "Ccting geforce rtx 4090 24gb", preco: 12449.99, descricaoPreco: "À vista no PIX", imagem: "https://ae01.alicdn.com/kf/S8e57b7bcece5400ba3dbcb3960eec33eD/Ccting-geforce-rtx-4090-24gb-gddr6x-384-bit-placa-de-v-deo-do-jogo-placa-gr.png_.webp", quantidadeEstoque:10  },
    { id: 9, descricao: "Processador Intel i7-13° G", preco: 2699.00, descricaoPreco: "À vista no PIX", imagem: "https://images.kabum.com.br/produtos/fotos/386974/processador-intel-core-i7-13700kf-5-4ghz-max-turbo-cache-30mb-16-nucleos-24-threads-lga-1700-bx8071513700kf_1664287863_gg.jpg", quantidadeEstoque:10  },
    { id: 10, descricao: "Notebook Inspiron 15", preco: 5500.33, descricaoPreco: "À vista no PIX", imagem: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/xs9320t-cnb-00005ff090-gy-oled.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=628&qlt=100,1&resMode=sharp2&size=628,402&chrss=full", quantidadeEstoque:10  },
    { id: 11, descricao: "Notebook Gamer Acer AMD Ryzen", preco: 4500.99, descricaoPreco: "À vista no PIX", imagem: "https://a-static.mlcdn.com.br/800x560/notebook-gamer-acer-amd-ryzen-r7-5800h-8gb-512gb-ssd-156-full-hd-nvidia-gtx-1650-4gb/magazineluiza/236463500/5137b847a790d7d7df82669ba60a171c.jpg", quantidadeEstoque:10  },
    { id: 12, descricao: "SSD KINGSTON KC600, 2TB", preco: 1499.99, descricaoPreco: "À vista no PIX", imagem: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/s/k/skc6002048g2.jpg", quantidadeEstoque:10  }
]