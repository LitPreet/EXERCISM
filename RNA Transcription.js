//rna transcription js 
export const toRna = dna => {
  const map = {
    C: 'G',
    G: 'C',
    A: 'U',
    T: 'A'
  };
  return dna.replace(/[CGAT]/g, nuc => map[nuc]);
};
