---
layout: page
title: Learnings
permalink: /learnings/
description: A bunch of learnings I've done so far.
nav: true
nav_order: 3
display_categories: [x, y]
horizontal: false
---

<!-- pages/projects.md -->
<div class="learnings">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized learnings -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_learnings = site.learnings | where: "category", category %}
  {% assign sorted_learnings = categorized_learnings | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for learning in sorted_learnings %}
      {% include learnings_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_learnings %}
      {% include learnings.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display learnings without categories -->

{% assign sorted_learnings = site.learnings | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_learnings %}
      {% include learnings_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_learnings %}
      {% include learnings.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
