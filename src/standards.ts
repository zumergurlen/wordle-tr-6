export interface Standard {
  id: string;
  name: string;
  keywords: string[];
  description: string;
  pdf: string;
}

export const standards: Standard[] = [
  {
    id: "TS ISO 8976",
    name: "Tornavida Uçları — Genel Özellikler",
    keywords: ["tornavida", "uç", "screwdriver", "bit"],
    description: "Tornavida uçlarının boyutsal ve mekanik gereksinimlerini kapsar.",
    pdf: "/pdfs/TS_ISO_8976.pdf",
  },
  {
    id: "TS ISO 5747",
    name: "Pense ve Kerpeten — Boyutlar ve Deney Değerleri",
    keywords: ["pense", "kerpeten", "pliers", "boyut", "deney"],
    description: "Pense ve kerpetenlerin boyutsal özelliklerini ve deney değerlerini tanımlar.",
    pdf: "/pdfs/TS_ISO_5747.pdf",
  },
  {
    id: "TS ISO 5745",
    name: "Pense ve Kerpeten — Genel Özellikler",
    keywords: ["pense", "kerpeten", "genel", "pliers"],
    description: "Pense ve kerpetenlerin genel teknik özelliklerini ve sınıflandırmasını kapsar.",
    pdf: "/pdfs/TS_ISO_5745.pdf",
  },
  {
    id: "TS ISO 5744",
    name: "Pense ve Kerpeten — Deney Yöntemleri",
    keywords: ["pense", "kerpeten", "deney", "test", "yöntem"],
    description: "Pense ve kerpetenlere uygulanan deney yöntemlerini ve test koşullarını belirler.",
    pdf: "/pdfs/TS_ISO_5744.pdf",
  },
  {
    id: "TS ISO 5743",
    name: "Pense ve Kerpeten — Malzeme Özellikleri",
    keywords: ["pense", "kerpeten", "malzeme", "material"],
    description: "Pense ve kerpeten imalatında kullanılan malzemelerin özelliklerini kapsar.",
    pdf: "/pdfs/TS_ISO_5743.pdf",
  },
  {
    id: "TS ISO 5742",
    name: "Pense ve Kerpeten — Sınıflandırma",
    keywords: ["pense", "kerpeten", "sınıf", "classification"],
    description: "Pense ve kerpetenlerin tip ve sınıflandırma esaslarını tanımlar.",
    pdf: "/pdfs/TS_ISO_5742.pdf",
  },
  {
    id: "TS ISO 3318",
    name: "El Aletleri — Çekiçler — Boyutlar",
    keywords: ["çekiç", "hammer", "el aleti", "boyut"],
    description: "El çekiçlerinin boyutsal gereksinimlerini ve toleranslarını kapsar.",
    pdf: "/pdfs/TS_ISO_3318.pdf",
  },
  {
    id: "TS 11810",
    name: "El Aletleri — Güvenlik Gereksinimleri",
    keywords: ["el aleti", "güvenlik", "safety", "hand tool"],
    description: "El aletlerinin güvenli kullanımına yönelik genel gereksinimleri ve işaretleme koşullarını tanımlar.",
    pdf: "/pdfs/TS_11810.pdf",
  },
  {
    id: "TS 3796",
    name: "Anahtar Takımları — Genel Özellikler",
    keywords: ["anahtar", "spanner", "wrench", "takım"],
    description: "Somun anahtarları ve takım setlerinin boyutsal ve mekanik özelliklerini kapsar.",
    pdf: "/pdfs/TS_3796.pdf",
  },
  {
    id: "TS 81",
    name: "Tornavidalar — Genel Özellikler",
    keywords: ["tornavida", "screwdriver", "düz", "yıldız"],
    description: "Düz ve yıldız tornavidaların boyut, malzeme ve dayanım gereksinimlerini tanımlar.",
    pdf: "/pdfs/TS_81.pdf",
  },
  {
    id: "TS 5-3",
    name: "Çekiçler — Saplı Çekiçler",
    keywords: ["çekiç", "sap", "hammer", "saplı"],
    description: "Saplı çekiçlerin baş ve sap bağlantı koşullarını, malzeme ve boyut gereksinimlerini kapsar.",
    pdf: "/pdfs/TS_5_3.pdf",
  },
  {
    id: "TS 5-1",
    name: "Çekiçler — Genel Özellikler",
    keywords: ["çekiç", "hammer", "tokmak", "genel"],
    description: "Endüstriyel ve el çekiçleri için malzeme, boyut ve dayanım gereksinimlerini kapsar.",
    pdf: "/pdfs/TS_5_1.pdf",
  },
  {
    id: "TS ISO 6787",
    name: "El Aletleri — Tornavida Uçları Ölçüleri",
    keywords: ["tornavida", "uç", "ölçü", "bit", "iso"],
    description: "Tornavida uçlarının standart ölçülerini ve geometrik toleranslarını belirler.",
    pdf: "/pdfs/TS_ISO_6787.pdf",
  },
  {
    id: "TS 9512",
    name: "El Testereleri — Genel Özellikler",
    keywords: ["testere", "el testeresi", "saw", "kesme"],
    description: "El testerelerinin diş geometrisi, malzeme özellikleri ve boyutsal gereksinimlerini kapsar.",
    pdf: "/pdfs/TS_9512.pdf",
  },
  {
    id: "TS 686",
    name: "Pafta Takımları — Genel Özellikler",
    keywords: ["pafta", "die", "diş açma", "takım", "vida diş"],
    description: "Pafta takımlarının ölçüsel ve mekanik özelliklerini, malzeme gereksinimlerini tanımlar.",
    pdf: "/pdfs/TS_686.pdf",
  },
  {
    id: "TS 60",
    name: "Eğeler — Genel Özellikler",
    keywords: ["eğe", "file", "törpü", "metal işleme"],
    description: "Metal işleme eğelerinin diş formu, sertlik ve boyutsal gereksinimlerini kapsar.",
    pdf: "/pdfs/TS_60.pdf",
  },
];
