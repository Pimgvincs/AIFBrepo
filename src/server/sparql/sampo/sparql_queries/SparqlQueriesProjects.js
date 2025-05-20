
export const projectInstanceProperties = `
    {
      ?id swrc:Project ?project__id .
      BIND(REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1") AS ?uri__prefLabel)
      BIND(CONCAT("/project/page/", REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1")) AS ?uri__dataProviderUrl)
    }
    UNION
    {
      ?id swrc:name ?name__id .
      OPTIONAL {
        ?name__id rdfs:label ?nameLabel .
      }
      BIND(COALESCE(?nameLabel,  REPLACE(STR(?name__id), "^.*[/#]([^/#]+)$", "$1")) AS ?name__prefLabel)
    }
    UNION
    {
      ?id swrc:homepage ?homepage__id .
      OPTIONAL {
        ?homepage__id rdfs:label ?homepageLabel .
      }
      BIND(COALESCE(?homepageLabel, REPLACE(STR(?homepage__id), "^.*[/#]([^/#]+)$", "$1")) AS ?homepage__prefLabel)

    }
    UNION
    {
      ?id swrc:financedBy ?financedBy__id .
      OPTIONAL {
        ?financedBy__id swrc:name ?financedByLabel .
      }
      BIND(COALESCE(?financedByLabel,  REPLACE(STR(?financedBy__id), "^.*[/#]([^/#]+)$", "$1")) AS ?financedBy__prefLabel)
      BIND(CONCAT("/organization/page/", REPLACE(STR(?financedBy__id), "^.*[/#]([^/#]+)$", "$1")) AS ?financedBy__dataProviderUrl)
    }
    UNION
    {
      ?id swrc:carriedOutBy ?carriedOutBy__id .
      OPTIONAL {
        ?carriedOutBy__id swrc:name ?carriedOutByLabel .
      }
      BIND(COALESCE(?carriedOutByLabel, REPLACE(STR(?carriedOutBy__id), "^.*[/#]([^/#]+)$", "$1")) AS ?carriedOutBy__prefLabel)
      BIND(CONCAT("/affiliation/page/", REPLACE(STR(?carriedOutBy__id), "^.*[/#]([^/#]+)$", "$1")) AS ?carriedOutBy__dataProviderUrl)
    }
    UNION
    {
      ?id swrc:isAbout ?isAbout__id .
      OPTIONAL {
        ?isAbout__id swrc:name ?isAboutLabel .
      }
      BIND(COALESCE(?isAboutLabel, REPLACE(STR(?isAbout__id), "^.*[/#]([^/#]+)$", "$1")) AS ?isAbout__prefLabel)
      BIND(CONCAT("/about/page/", REPLACE(STR(?isAbout__id), "^.*[/#]([^/#]+)$", "$1")) AS ?isAbout__dataProviderUrl)
    }
    UNION
    {
      ?id swrc:member ?member__id .
      OPTIONAL {
        ?member__id swrc:name ?memberLabel .
      }
      BIND(COALESCE(?memberLabel, REPLACE(STR(?member__id), "^.*[/#]([^/#]+)$", "$1")) AS ?member__prefLabel)
      BIND(CONCAT("/person/page/", REPLACE(STR(?member__id), "^.*[/#]([^/#]+)$", "$1")) AS ?member__dataProviderUrl)
    }
    UNION
    {
      ?id swrc:projectInfo ?projectInfo__id .
      OPTIONAL {
        ?projectInfo__id swrc:title ?projectInfoLabel .
      }
      BIND(COALESCE(?projectInfoLabel, REPLACE(STR(?projectInfo__id), "^.*[/#]([^/#]+)$", "$1")) AS ?projectInfo__prefLabel)
      BIND(CONCAT("/publication/page/", REPLACE(STR(?projectInfo__id), "^.*[/#]([^/#]+)$", "$1")) AS ?projectInfo__dataProviderUrl)
    }
`