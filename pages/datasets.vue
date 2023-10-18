<template>
  <div class="container">
    <h2 class="category_title">Datasets</h2>
    <div class="datasets_contents">
      <h3 class="dataset_name">Human</h3>
      <table class="datasets_table">
        <thead>
          <tr>
            <th>Dataset name</th>
            <th>FANTOM5</th>
            <th>GTEx V8</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>No. of genes</td>
            <td>21,035</td>
            <td>56,161</td>
          </tr>
          <tr>
            <td>No. of samples</td>
            <td>863</td>
            <td>638</td>
          </tr>
          <tr>
            <td>Key ID</td>
            <td>NCBI gene</td>
            <td>Ensembl gene</td>
          </tr>
          <tr>
            <td>Reference(s)</td>
            <td>
              <a href="https://doi.org/10.1038/sdata.2017.112"
                >DOI: 10.1038/sdata.2017.112</a
              >,
              <a href="https://doi.org/10.1093/nar/gkaa1054"
                >DOI: 10.1093/nar/gkaa1054</a
              >
            </td>
            <td>
              <a href="https://doi.org/10.1126/science.aaz1776"
                >DOI: 10.1126/science.aaz1776</a
              >
            </td>
          </tr>
          <tr>
            <td>Original data</td>
            <td>
              <a href="https://fantom.gsc.riken.jp/5/data/"
                >https://fantom.gsc.riken.jp/5/data/</a
              >
            </td>
            <td>
              <a
                href="https://storage.googleapis.com/gtex_analysis_v8/rna_seq_data/GTEx_Analysis_2017-06-05_v8_RNASeQCv1.1.9_gene_tpm.gct.gz"
                >GTEx_Analysis_2017-06-05_v8_RNASeQCv1.1.9_gene_tpm.gct.gz</a
              >
            </td>
          </tr>
          <tr>
            <td>Processed data matrix</td>
            <td>figshare</td>
            <td></td>
          </tr>
          <tr>
            <td>Sample ID mappings</td>
            <td>GitHub + figshare</td>
            <td></td>
          </tr>
          <tr>
            <td>Grouped sample description</td>
            <td>GitHub + figshare</td>
            <td></td>
          </tr>
          <tr>
            <td>Sample specific expression pattern</td>
            <td>GitHub + figshare</td>
            <td></td>
          </tr>
          <tr>
            <td>Processing procedures</td>
            <td>
              <a href="https://github.com/sh-ikeda/refex_data_processing"
                >GitHub</a
              >
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Last updated</td>
            <td>28/9/2023</td>
            <td>28/9/2023</td>
          </tr>
        </tbody>
      </table>

      <h3 class="dataset_name">Mouse</h3>
      <table table class="datasets_table">
        <thead>
          <tr>
            <th>Dataset name</th>
            <th>FANTOM5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>No. of genes</td>
            <td>21,369</td>
          </tr>
          <tr>
            <td>No. of samples</td>
            <td>535</td>
          </tr>
          <tr>
            <td>Key ID</td>
            <td>NCBI gene</td>
          </tr>
          <tr>
            <td>Reference(s)</td>
            <td>
              <a href="https://doi.org/10.1038/sdata.2017.112"
                >DOI: 10.1038/sdata.2017.112</a
              >,
              <a href="https://doi.org/10.1093/nar/gkaa1054"
                >DOI: 10.1093/nar/gkaa1054</a
              >
            </td>
          </tr>
          <tr>
            <td>Original data</td>
            <td>
              <a href="https://fantom.gsc.riken.jp/5/data/"
                >https://fantom.gsc.riken.jp/5/data/</a
              >
            </td>
          </tr>
          <tr>
            <td>Last updated</td>
            <td>28/9/2023</td>
          </tr>
        </tbody>
      </table>

      <h3 class="dataset_name">Arabidopsis thaliana</h3>
      <table table class="datasets_table">
        <thead>
          <tr>
            <th>Dataset name</th>
            <th>TraVA</th>
            <th>Proteome Project</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>No. of genes</td>
            <td>32,431</td>
            <td>32,431</td>
          </tr>
          <tr>
            <td>No. of samples</td>
            <td>85</td>
            <td>54</td>
          </tr>
          <tr>
            <td>Key ID</td>
            <td>NCBI gene</td>
            <td>NCBI gene</td>
          </tr>
          <tr>
            <td>Reference(s)</td>
            <td>
              <a href="https://doi.org/10.1111/tpj.13312"
                >DOI: 10.1111/tpj.13312</a
              >
            </td>
            <td>
              <a href="https://doi.org/10.1038/s41586-020-2094-2"
                >DOI: 10.1038/s41586-020-2094-2</a
              >
            </td>
          </tr>
          <tr>
            <td>Original data</td>
            <td>
              <a
                href="https://www.ncbi.nlm.nih.gov/bioproject/?term=PRJNA314076%20"
                >PRJNA314076</a
              >,
              <a
                href="https://www.ncbi.nlm.nih.gov/bioproject/?term=PRJNA324514"
                >PRJNA324514</a
              >
            </td>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/bioproject/?term=PRJEB32665"
                >PRJEB32665</a
              >
            </td>
          </tr>
          <tr>
            <td>Last updated</td>
            <td>28/9/2023</td>
            <td>28/9/2023</td>
          </tr>
        </tbody>
      </table>

      <h3 class="dataset_name">Drosophila melanogaster (Fruit fly)</h3>
      <table table class="datasets_table">
        <thead>
          <tr>
            <th>Dataset name</th>
            <th>Drosophila melanogaster transcriptome</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>No. of genes</td>
            <td>17,894</td>
          </tr>
          <tr>
            <td>No. of samples</td>
            <td>32</td>
          </tr>
          <tr>
            <td>Key ID</td>
            <td>NCBI gene</td>
          </tr>
          <tr>
            <td>Reference(s)</td>
            <td>
              <a href="https://doi.org/10.26508/lsa.201800156"
                >DOI: 10.26508/lsa.201800156</a
              >
            </td>
          </tr>
          <tr>
            <td>Original data</td>
            <td>
              <a
                href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE99574"
                >GSE99574</a
              >
            </td>
          </tr>
          <tr>
            <td>Last updated</td>
            <td>28/9/2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        script: [
          {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(this.jsonld, null, 2),
          },
        ],
      };
    },
    computed: {
      jsonld() {
        return {
          '@context': 'http://schema.org',
          '@type': 'Dataset',
          name: 'title',
          description: 'description',
          creator: [
            {
              '@type': 'Organization',
              url: 'http://dbcls.rois.ac.jp/',
              name: 'Database Center for Life Science',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                telephone: '81-4-7135-5508',
              },
            },
          ],
        };
      },
    },
  };
</script>

<style lang="sass">
  .dataset_name
    margin: 0
    font-weight: bold
    font-size: 18px
    margin-bottom: 2px
  .dataset_name:first-child
    margin-top: 16px
  .datasets_table
    font-size: 14px
    border-spacing: 0px 10px
    width: 100%
    table-layout: auto
    border-bottom: 2px solid #3E4652
    margin-bottom: 40px
    border-collapse: collapse
    thead, tbody
      text-align: left
      tr
        &:nth-of-type(even)
          background-color: #F5F7F9
        th
          border-top: 2px solid #3E4652
          border-bottom: 1px solid #3E4652
        th, td
          padding: 10px
</style>
