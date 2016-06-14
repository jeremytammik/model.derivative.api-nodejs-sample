#!/bin/sh

heroku config:set STG_CONSUMERKEY=$STG_CONSUMERKEY --app roomedit3dv2
heroku config:set STG_CONSUMERSECRET=$STG_CONSUMERSECRET --app roomedit3dv2
heroku config:set PROD_CONSUMERKEY=$PROD_CONSUMERKEY --app roomedit3dv2
heroku config:set PROD_CONSUMERSECRET=$PROD_CONSUMERSECRET --app roomedit3dv2
heroku config:set CALLBACK_URL=$CALLBACK_URL --app roomedit3dv2
