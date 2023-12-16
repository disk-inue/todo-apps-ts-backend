import type { DocumentNode } from 'graphql';
  export const typeDefs = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query","loc":{"start":5,"end":10}},"interfaces":[],"directives":[],"fields":[],"loc":{"start":0,"end":10}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation","loc":{"start":17,"end":25}},"interfaces":[],"directives":[],"fields":[],"loc":{"start":12,"end":25}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Book","loc":{"start":31,"end":35}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"title","loc":{"start":40,"end":45}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":47,"end":53}},"loc":{"start":47,"end":53}},"directives":[],"loc":{"start":40,"end":53}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"author","loc":{"start":56,"end":62}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":64,"end":70}},"loc":{"start":64,"end":70}},"directives":[],"loc":{"start":56,"end":70}}],"loc":{"start":26,"end":72}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query","loc":{"start":86,"end":91}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"books","loc":{"start":96,"end":101}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Book","loc":{"start":104,"end":108}},"loc":{"start":104,"end":108}},"loc":{"start":103,"end":109}},"directives":[],"loc":{"start":96,"end":109}}],"loc":{"start":74,"end":111}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"AddBookMutationResponse","loc":{"start":118,"end":141}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"code","loc":{"start":146,"end":150}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":152,"end":158}},"loc":{"start":152,"end":158}},"loc":{"start":152,"end":159}},"directives":[],"loc":{"start":146,"end":159}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"success","loc":{"start":162,"end":169}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean","loc":{"start":171,"end":178}},"loc":{"start":171,"end":178}},"loc":{"start":171,"end":179}},"directives":[],"loc":{"start":162,"end":179}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"message","loc":{"start":182,"end":189}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":191,"end":197}},"loc":{"start":191,"end":197}},"loc":{"start":191,"end":198}},"directives":[],"loc":{"start":182,"end":198}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"book","loc":{"start":201,"end":205}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Book","loc":{"start":207,"end":211}},"loc":{"start":207,"end":211}},"directives":[],"loc":{"start":201,"end":211}}],"loc":{"start":113,"end":213}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Mutation","loc":{"start":227,"end":235}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"addBook","loc":{"start":240,"end":247}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"title","loc":{"start":248,"end":253}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":255,"end":261}},"loc":{"start":255,"end":261}},"directives":[],"loc":{"start":248,"end":261}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"author","loc":{"start":263,"end":269}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":271,"end":277}},"loc":{"start":271,"end":277}},"directives":[],"loc":{"start":263,"end":277}}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"AddBookMutationResponse","loc":{"start":280,"end":303}},"loc":{"start":280,"end":303}},"directives":[],"loc":{"start":240,"end":303}}],"loc":{"start":215,"end":305}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query","loc":{"start":318,"end":323}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"user","loc":{"start":328,"end":332}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id","loc":{"start":333,"end":335}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":337,"end":339}},"loc":{"start":337,"end":339}},"loc":{"start":337,"end":340}},"directives":[],"loc":{"start":333,"end":340}}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"User","loc":{"start":343,"end":347}},"loc":{"start":343,"end":347}},"directives":[],"loc":{"start":328,"end":347}}],"loc":{"start":306,"end":349}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"User","loc":{"start":356,"end":360}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":365,"end":367}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":369,"end":371}},"loc":{"start":369,"end":371}},"loc":{"start":369,"end":372}},"directives":[],"loc":{"start":365,"end":372}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"fullName","loc":{"start":375,"end":383}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":385,"end":391}},"loc":{"start":385,"end":391}},"loc":{"start":385,"end":392}},"directives":[],"loc":{"start":375,"end":392}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"isAdmin","loc":{"start":395,"end":402}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean","loc":{"start":404,"end":411}},"loc":{"start":404,"end":411}},"loc":{"start":404,"end":412}},"directives":[],"loc":{"start":395,"end":412}}],"loc":{"start":351,"end":414}}],"loc":{"start":0,"end":415}} as unknown as DocumentNode