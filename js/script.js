window.addEventListener('load', function () {
    const selects = document.querySelectorAll(".filter-objects__select select");
    Array.from(selects).forEach((el) => {
      $(el).selectric({
				nativeOnMobile: false
			});
			const label = el.parentNode.parentNode.querySelector('.label') || null
			const title = el.parentNode.parentNode.parentNode.querySelector('.title')
			const placeholder = el.parentNode.querySelector('.placeholder') || null
			const select = el.parentNode.parentNode.querySelector('.selectric')
			const parent = el.parentNode.parentNode;
			const amount = parent.parentNode.querySelector('.amount') || null
      if (label !== null) {
        if (label.textContent === placeholder.textContent && !parent.classList.contains('default')) {
          label.style['color'] = '#808080'
          label.style['opacity'] = '0'
          title.style['top'] = '50%'
          title.style['font-size'] = '15px'
        }
			
        if (label.textContent !== placeholder.textContent) {
          label.style['color'] = '#333333'
          label.style['opacity'] = '1'
          title.style['top'] = '14px'
          title.style['font-size'] = '11px'
          select.style['border'] = '1px solid #ACA3D9'
          select.style['background'] = '#F7F6FB'
        }
      }
			$(el).on('selectric-change', function () {
			  if (!parent.classList.contains('default')) {
				if (label.textContent === placeholder.textContent) {
					label.style['color'] = '#808080'
					label.style['opacity'] = '0'
					title.style['top'] = '50%'
					title.style['font-size'] = '15px'
					select.style['border'] = '1px solid #CCCCCC'
					select.style['background'] = '#FFFFFF'
					amount.style.opacity = 0
				} else {
					if (amount !== null) {
						amount.innerHTML = parent.querySelectorAll('.selected').length
						amount.style.opacity = 1
					}
					label.style['color'] = '#333333'
					label.style['opacity'] = '1'
					title.style['top'] = '14px'
					title.style['font-size'] = '11px'
					select.style['border'] = '1px solid #ACA3D9'
					select.style['background'] = '#F7F6FB'
				}
			  }
			})
			$(el).on('selectric-open', function () {
				if (!parent.classList.contains('default')) {
					title.style['z-index'] = '100001'
				}
			})
			$(el).on('selectric-close', function () {
				if (!parent.classList.contains('default')) {
					title.style['z-index'] = '1'
				}
			})
    });

    let clasterTogglers = Array.from(document.querySelectorAll('.list-objects__item.claster.toggler')) || null;

    if (clasterTogglers !== null) {
      clasterTogglers.forEach(toggler => {
        toggler.addEventListener('click', function () {
          toggler.classList.toggle("active");
          let parent = toggler.parentNode.parentNode.classList.toggle("active");
          let subs = toggler.parentNode.parentNode.querySelector('.list-objects__sub') || null;
          if (subs !== null) {
            if (subs.style.maxHeight) {
              subs.style.maxHeight = null;
            } else {
              subs.style.maxHeight = subs.scrollHeight + "px";
            }
          }
        })
      })
    }

    let checkAll = document.querySelector('.list-objects__header .edition-objects__checkbox input') || null;
    if (checkAll !== null) {
      checkAll.addEventListener('change', function () {
        let allChecks = Array.from(document.querySelectorAll('.list-objects__main .edition-objects__checkbox input')) || null
        if (checkAll.checked) {
          allChecks.forEach(check => {
            check.checked = true
          })
        } else {
          allChecks.forEach(check => {
            check.checked = false
          })
        }
      })
    }

    $('.perpageview select').selectric({
      nativeOnMobile: false
    });
})
