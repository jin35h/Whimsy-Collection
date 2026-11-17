/**
 * WHIMSY COLLECTION - STYLE JOURNAL & ARTICLE READER
 * Dual Loading: Local JavaScript Data Module + AJAX fallback
 */

$(document).ready(function () {
  if ($('#journalGrid').length) {
    loadJournalArticles();
  }
  if ($('#articleDetail').length) {
    loadSingleArticle();
  }
});

function loadJournalArticles() {
  function renderArticles(articles) {
    $('#journalGrid').attr('aria-busy', 'false');
    if (!Array.isArray(articles) || !articles.length) {
      $('#journalGrid').html('<div class="content-state" role="status"><p>No journal articles are available right now.</p><a href="contact.html">Ask our concierge for styling guidance</a></div>');
      return;
    }
    let html = '';
    articles.forEach(a => {
      const artImg = encodeURI(a.image || 'images/Whimsy product catalouge/Floral Gold Necklace Display.jpeg');
      html += `
        <article class="product-card reveal visible" style="border-radius:2px; overflow:hidden;">
          <a href="article.html?slug=${encodeURIComponent(a.slug)}" style="display:block; aspect-ratio:16/10; overflow:hidden; background:#F1ECE3;">
            <img src="${artImg}" alt="${a.title}" style="width:100%; height:100%; object-fit:cover; transition:transform 0.5s ease;" onerror="this.src='images/Whimsy product catalouge/Floral Gold Necklace Display.jpeg'" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'">
          </a>
          <div style="padding:24px; display:flex; flex-direction:column; justify-content:space-between; flex-grow:1;">
            <div>
              <div style="font-size:10px; text-transform:uppercase; letter-spacing:0.12em; color:#C6A36B; font-weight:700; margin-bottom:8px;">
                <span>${a.category}</span> • <span>${a.read_time}</span>
              </div>
              <h3 class="font-serif" style="font-size:22px; line-height:1.25; margin-bottom:10px;">
                <a href="article.html?slug=${encodeURIComponent(a.slug)}" style="color:#352820;">${a.title}</a>
              </h3>
              <p style="font-size:12px; color:#6B5E55; line-height:1.65; font-weight:300;">
                ${a.excerpt}
              </p>
            </div>
            <div style="margin-top:16px; padding-top:12px; border-top:1px solid #E8DFD5; display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:11px; color:#92765C;">${a.author}</span>
              <a href="article.html?slug=${encodeURIComponent(a.slug)}" style="font-size:11px; text-transform:uppercase; letter-spacing:0.1em; font-weight:600; color:#352820;">Read Guide →</a>
            </div>
          </div>
        </article>
      `;
    });
    $('#journalGrid').html(html);
  }

  if (window.WHIMSY_ARTICLES && window.WHIMSY_ARTICLES.length) {
    renderArticles(window.WHIMSY_ARTICLES);
    return;
  }

  $.ajax({
    url: 'assets/data/articles.json',
    type: 'GET',
    dataType: 'json',
    success: function (articles) {
      renderArticles(articles);
    },
    error: function () {
      if (window.WHIMSY_ARTICLES) {
        renderArticles(window.WHIMSY_ARTICLES);
      } else {
        $('#journalGrid').html('<div class="content-state" role="alert"><p>We could not load the Style Journal. Please try again later.</p><a href="contact.html">Contact the concierge</a></div>');
      }
    }
  });
}

function loadSingleArticle() {
  const urlParams = new URLSearchParams(window.location.search);
  const slugQuery = urlParams.get('slug');

  function renderSingle(articles) {
    $('#articleDetail').attr('aria-busy', 'false');
    const article = articles.find(a => a.slug === slugQuery);
    if (!article) {
      $('#articleDetail').html('<div class="container" role="status" style="padding:64px 20px; text-align:center;"><h1 class="font-serif">Article not found</h1><p>This guide may have moved. Explore the Style Journal to browse current articles.</p><a class="btn btn-primary" href="style-journal.html">Browse the Style Journal</a></div>');
      return;
    }

    document.title = `${article.title} | Whimsy Style Journal`;

    $('#articleBreadcrumbTitle').text(article.title);
    $('#articleCategoryBadge').text(article.category);
    $('#articleTitle').text(article.title);
    $('#articleAuthor').text(`By ${article.author}`);
    $('#articleReadTime').text(article.read_time);
    $('#articleDate').text(article.published_at);
    
    const artHero = encodeURI(article.image || 'images/Whimsy product catalouge/Floral Gold Necklace Display.jpeg');
    $('#articleHeroImg').attr('src', artHero).attr('alt', article.title);
    $('#articleExcerpt').text(`"${article.excerpt}"`);

    // Format body text with paragraphs
    const paragraphs = article.content.split('\n\n');
    let bodyHtml = '';
    paragraphs.forEach(p => {
      bodyHtml += `<p style="margin-bottom:18px; font-size:15px; line-height:1.75; color:#352820; font-weight:300;">${p}</p>`;
    });
    $('#articleBodyContent').html(bodyHtml);

    // Render Related Articles
    const related = articles.filter(a => a.slug !== article.slug).slice(0, 3);
    let relHtml = '';
    related.forEach(r => {
      relHtml += `
        <div style="background:#FFFFFF; border:1px solid #E8DFD5; padding:20px; border-radius:2px;">
          <span style="font-size:10px; color:#C6A36B; text-transform:uppercase; font-weight:600;">${r.category}</span>
          <h4 class="font-serif" style="font-size:18px; margin:6px 0 10px;">
            <a href="article.html?slug=${encodeURIComponent(r.slug)}" style="color:#352820;">${r.title}</a>
          </h4>
          <a href="article.html?slug=${encodeURIComponent(r.slug)}" style="font-size:11px; font-weight:600; text-transform:uppercase; color:#C6A36B;">Read Article →</a>
        </div>
      `;
    });
    $('#relatedArticlesGrid').html(relHtml);
  }

  if (window.WHIMSY_ARTICLES && window.WHIMSY_ARTICLES.length) {
    renderSingle(window.WHIMSY_ARTICLES);
    return;
  }

  $.ajax({
    url: 'assets/data/articles.json',
    type: 'GET',
    dataType: 'json',
    success: function (articles) {
      renderSingle(articles);
    },
    error: function () {
      if (window.WHIMSY_ARTICLES) {
        renderSingle(window.WHIMSY_ARTICLES);
      } else {
        $('#articleDetail').html('<div class="container" role="alert" style="padding:64px 20px; text-align:center;"><h1 class="font-serif">Article unavailable</h1><p>We could not load this guide just now.</p><a class="btn btn-primary" href="style-journal.html">Browse the Style Journal</a></div>');
      }
    }
  });
}
