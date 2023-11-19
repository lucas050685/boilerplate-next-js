#!/bin/bash
echo "";
echo "Deplyment in vercel...";
echo "TOKEN ${VERCEL_TOKEN} <<";
if [ "${VERCEL_TOKEN}" == '' ]
then
  echo "";
  echo "VERCEL_TOKEN is required to deploy the application";
  echo "Be sure you have this variable declared in you evnironment";
  echo "";
  exit 1;
fi

yarn vercel --prod -y --token $VERCEL_TOKEN;
