module.exports = {
  tables: [
    {
      TableName: `products`,
      KeySchema: [
        { AttributeName: 'id', KeyType: 'HASH' }
      ],
      AttributeDefinitions: [
        { AttributeName: 'id', AttributeType: 'S' },        
        { AttributeName: 'type', AttributeType: 'S' }
      ],
      GlobalSecondaryIndexes: [
        {
          IndexName: 'type-gsi',
          KeySchema: [{ AttributeName: 'type', KeyType: 'HASH' }],

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
