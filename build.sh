git status

case "$1" in 
staging )
    api_env="staging"
    echo "building against AWS Staging"
    npm run build staging
    ;;

prod )
    api_env="production"
    echo "building against AWS Production"
    npm run build
    ;;

    * )
    echo "Invalid environment, please select either (staging or prod)"
    exit 1
    ;;
esac


# echo $AWS_ENV

# export AWS_ENV=api_env npm run build
# npm run build
# node build/build.js
# npm run build

echo "\nFinished building! Ready to be deployed on the CLOUDD!!\n"