terraform {
  required_version = "~> 1.9"

  backend "s3" {
    bucket = "dylan-tf-remote-states"
    key    = "csmarks-link.tfstate"
    region = "ap-southeast-2"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5"
    }
  }
}

locals {
  project = "csmarks-link-web"
  domain  = "csmarks.link"
}

provider "aws" {
  region = "ap-southeast-2"

  default_tags {
    tags = {
      terraform = true
      project   = local.project
    }
  }
}

provider "aws" {
  region = "us-east-1"
  alias  = "us_east_1"
}

