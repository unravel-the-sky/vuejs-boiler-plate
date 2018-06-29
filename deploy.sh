echo "starting to DEPLOY!"

case "$1" in 
portal-staging )
    human_app="portal-as-landing-page"
    human_env="staging"
    eb_env="newportal-staging-env"
    ;;

portal-prod )
    human_app="portal-as-landing-page"
    human_env="production"
    eb_env="newportal-prod-env"
    ;;

    * )
    echo "Invalid environment, please select either (portal-staging or portal-prod)"
    exit 1
    ;;
esac

eb deploy "$eb_env"


#
# NOTIFY SLACK
#

echo "${color_start}Notifying Slack... ${color_end}"

name=$(git config user.name)

curl -s -S -X POST --data-urlencode "payload={
  \"text\": \"Infrastructure has been updated\",
  \"attachments\": [
    {
      \"author_name\": \"$name\",
      \"author_link\": \"https://github.com/$name\",
      \"author_icon\": \"https://github.com/$name.png\",
      \"fields\": [
        {
          \"title\": \"Application\",
          \"value\": \"$human_app\",
          \"short\": true
        },
        {
          \"title\": \"Environment\",
          \"value\": \"$human_env\",
          \"short\": true
        }
      ]
    }
  ]
}" https://hooks.slack.com/services/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 > /dev/null