export type AmplifyDependentResourcesAttributes = {
  function: {
    ganttchartappDefineAuthChallenge: {
      Name: 'string';
      Arn: 'string';
      LambdaExecutionRole: 'string';
      Region: 'string';
    };
    ganttchartappCreateAuthChallenge: {
      Name: 'string';
      Arn: 'string';
      LambdaExecutionRole: 'string';
      Region: 'string';
    };
    ganttchartappVerifyAuthChallengeResponse: {
      Name: 'string';
      Arn: 'string';
      LambdaExecutionRole: 'string';
      Region: 'string';
    };
    ganttchartappCustomMessage: {
      Name: 'string';
      Arn: 'string';
      LambdaExecutionRole: 'string';
      Region: 'string';
    };
  };
  auth: {
    ganttchartapp: {
      HostedUIDomain: 'string';
      OAuthMetadata: 'string';
      UserPoolId: 'string';
      UserPoolArn: 'string';
      UserPoolName: 'string';
      AppClientIDWeb: 'string';
      AppClientID: 'string';
      CreatedSNSRole: 'string';
    };
  };
};
