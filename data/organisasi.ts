
const getPlaceholderImage = (name: string) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=10b981&color=ffffff&size=128&font-size=0.33&bold=true`;

export const organisasiData = {
  periode: '1446 - 1447 H',
  pembina: { name: 'SAEPUDIN S.AG', position: 'PEMBINA ROHIS', image: getPlaceholderImage('SAEPUDIN S.AG') },
  ketuaUmum: { name: 'AHMAD AWAN DHELY', position: 'KETUA UMUM', image: getPlaceholderImage('AHMAD AWAN DHELY') },
  ketuaAkhwat: { name: 'AISYAH DZAKIYAHSHAQI', position: 'KETUA AKHWAT', image: getPlaceholderImage('AISYAH DZAKIYAHSHAQI') },
  sekretaris: [
    { name: 'AYUNDI PRAMYTHA ARYANI', position: 'SEKRETARIS UMUM', image: getPlaceholderImage('AYUNDI PRAMYTHA ARYANI') },
    { name: 'RINO ONGKOWIJOYO', position: 'SEKRETARIS UMUM', image: getPlaceholderImage('RINO ONGKOWIJOYO') },
  ],
  bendahara: [
    { name: 'EGY DWI FACHREZY', position: 'BENDAHARA', image: getPlaceholderImage('EGY DWI FACHREZY') },
    { name: 'SAHILA FARODISA', position: 'BENDAHARA', image: getPlaceholderImage('SAHILA FARODISA') },
  ],
  departemen: [
    {
      nama: 'Dakwah',
      ketua: { name: 'MUHAMMAD RAFI SAPUTRA', position: 'KETUA DEP. DAKWAH', image: getPlaceholderImage('M RAFI SAPUTRA') },
      wakil: { name: 'AULIA RAMADHANI', position: 'WAKIL KETUA DEP. DAKWAH', image: getPlaceholderImage('AULIA RAMADHANI') },
    },
    {
      nama: 'BRT',
      ketua: { name: 'AZHKA NUR FAUZIAH', position: 'KETUA DEP. BRT', image: getPlaceholderImage('AZHKA NUR FAUZIAH') },
      wakil: { name: 'ENDAH RETNONINGTIAS', position: 'WAKIL KETUA DEP. BRT', image: getPlaceholderImage('ENDAH RETNONINGTIAS') },
    },
    {
      nama: 'Humas',
      ketua: { name: 'MUHAMMAD SYAHRUL F.', position: 'KETUA DEP. HUMAS', image: getPlaceholderImage('M SYAHRUL F.') },
      wakil: { name: 'MARLINA ANGGRAINI', position: 'WAKIL KETUA DEP. HUMAS', image: getPlaceholderImage('MARLINA ANGGRAINI') },
    },
    {
      nama: 'TI',
      ketua: { name: 'SALMAN MAULIDI', position: 'KETUA DEP. TI', image: getPlaceholderImage('SALMAN MAULIDI') },
      wakil: { name: 'ALFINA NURHANIFAH', position: 'WAKIL KETUA DEP. TI', image: getPlaceholderImage('ALFINA NURHANIFAH') },
    },
    {
      nama: 'Ekonomi',
      ketua: { name: 'SITI KHOIRURO K. S.', position: 'KETUA DEP. EKONOMI', image: getPlaceholderImage('SITI KHOIRURO') },
      wakil: { name: 'HELLEN SFARINGGA', position: 'WAKIL KETUA DEP. EKONOMI', image: getPlaceholderImage('HELLEN SFARINGGA') },
    },
  ]
};
