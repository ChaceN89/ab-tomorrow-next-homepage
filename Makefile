SHELL = /bin/bash

include .env.deploy
export

# Make sure AWS CLI is installed and configured with Key, Secret, and Region for this bucket

publish:
	@echo "📦 Building and exporting static Next.js site..."
	npx next build

	@echo "🚀 Syncing 'out/' directory to S3 bucket... Deleting non matching files..."
	aws s3 sync out s3://$(BUCKET_NAME) --delete

	@echo "🧹 Invalidating CloudFront cache..."
	aws cloudfront create-invalidation \
		--distribution-id $(DISTRIBUTION_ID) \
		--paths "/*"

	@echo "✅ Deployment complete!"
