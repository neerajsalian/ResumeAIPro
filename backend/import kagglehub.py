import kagglehub

# Download latest version
path = kagglehub.dataset_download("quandmvn/helmet-or-without-helmet")

print("Path to dataset files:", path)