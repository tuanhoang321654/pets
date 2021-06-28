module.exports = {
  tables: [
    {
      TableName: `products`,
      KeySchema: [
        { AttributeName: 'id', KeyType: 'HASH' }
      ],
      AttributeDefinitions: [
        { AttributeName: 'id', AttributeType: 'S' },        
        { AttributeName: 'productType', AttributeType: 'S' }
      ],
      GlobalSecondaryIndexes: [
        {
          IndexName: 'type-gsi',
          KeySchema: [{ AttributeName: 'productType', KeyType: 'HASH' }],

          Projection: {
            ProjectionType: 'ALL',
          },

          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1,
          },
        },
      ],

      ProvisionedThroughput: { ReadCapacityUnits: 1, WriteCapacityUnits: 1 },
    },
  ],
};
