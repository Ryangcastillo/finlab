# Project Initialization Checklist

name: Project Initialization Checklist
about: Ensure all repo rules and best practices are set up before coding
title: "[INIT] Project Onboarding Checklist"
labels: ["onboarding", "rules"]
assignees: []

body:

- type: markdown
    attributes:
      value: |
        ## 📋 Project Initialization Checklist

        Please check all items before starting development.

- type: checkboxes
    attributes:
      label: Setup
      options:
        - label: Repository created with proper folder structure
        - label: Environment variables template created
        - label: Linting and formatting rules configured
        - label: Testing framework setup
        - label: CI/CD pipeline configured
        - label: Documentation templates created
        - label: Docker setup for consistent development environment
