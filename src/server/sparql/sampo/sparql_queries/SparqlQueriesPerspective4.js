const perspectiveID = 'perspective4'

export const OrganizationInstanceProperties = `
    {
      ?id swrc:Organization ?organization__id .
      BIND(REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1") AS ?uri__prefLabel)
      BIND(CONCAT("/organization/page/", REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1")) AS ?uri__dataProviderUrl)
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
      ?id swrc:finances ?finances__id .
      OPTIONAL {
        ?finances__id swrc:name ?financesLabel .
      }
      BIND(COALESCE(?financesLabel, REPLACE(STR(?finances__id), "^.*[/#]([^/#]+)$", "$1")) AS ?finances__prefLabel)
      BIND(CONCAT("/project/page/", REPLACE(STR(?finances__id), "^.*[/#]([^/#]+)$", "$1")) AS ?finances__dataProviderUrl)
    }
`