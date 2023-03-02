.PHONY: build

build:
	sam build

deploy-infra:
	aws-vault exec cloud-resume --no-session -- sam deploy --guided

deploy-site:
	aws-vault exec cloud-resume --no-session -- aws s3 sync ./resume-site/build s3://s3-cloud-challenge

invoke-put:
	aws-vault exec cloud-resume --no-session -- sam local invoke PutFunction
