## Tech Stack

- Ruby 2.6.4  
- Ruby on Rails 6.0.1
- PostgreSQL 9.5
- React 16

## Installation

### Requirements

Before you get started, the following needs to be installed:
  * **Ruby**. Version 2.6.4 is currently used and we don't guarantee everything works with other versions. If you need multiple versions of Ruby, [rbenv](https://rbenv.org) is recommended.
  * [**RubyGems**](http://rubygems.org/)
  * **Bundler**: `gem install bundler`
  * [**Git**](http://help.github.com/git-installation-redirect)
  * **A database**. Only PostgreSQL 9.5 has been tested, so we give no guarantees that other databases (e.g. MySQL) work. If you're using OS X and have Homebrew installed, install it with `brew install postgresql`
  * [**Redis**](http://redis.io). Version 3.2.6 has been used successfully, but newer versions should work as well. If you're using OS X and have Homebrew installed, install it with `brew install redis`
  
### Setting up the development environment

1. Get the code. Clone this git repository:

  ```bash
  git clone git://github.com/omkz/rails-react-blog.git
  cd rails-react-blog
  ```

2. Install the required gems by running the following command in the project root directory:

  ```bash
  bundle install
  ```

3. Create and initialize the database:

  ```bash
  bundle exec rake db:migrate
  ```

4. Install the required javascript library

  ```bash
  yarn --cwd client install
  ```

4. Start the development server:

  ```bash
  foreman start -f Procfile.dev
  ```

![railsblog! Screenshot](https://raw.githubusercontent.com/omkz/rails-react-blog/master/public/screenshot.png)