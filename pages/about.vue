<template>
  <div class="container">
    <h2 class="category_title">About</h2>
    <div class="about_contents">
      <p>
        RefEx2 is a web tool designed to facilitate the search for transcriptome
        datasets of various species, which serve as references for gene
        expression data analysis. This user-friendly platform allows flexible
        searching in both gene and sample directions, making it easy to
        investigate specific questions, such as how a particular gene is
        expressed across different samples or what gene expression patterns are
        observed in specific samples. Currently, RefEx2 provides access to 6
        reference datasets for four different species: humans, mice, Drosophila
        melanogaster, and Arabidopsis thaliana.
      </p>
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
  .container
    margin-top: 15px
    border-top: 3px solid $MAIN_COLOR
    display: flex
    flex-direction: column
    padding: 80px 15%
  .category_title
    color: $MAIN_COLOR
    padding-right: 150px
    font-size: 34px
    margin: 0
  .about_contents
    p
      line-height: 1.5
</style>
