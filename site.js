const publicKey = 'BObp3R8W9_ni9jLF_oxt9mGVl-7IgcKsi3nDxXDeNiZoFy8hm-bLYAzxWGBtinMU4e6s6f4R4R2SGI3fzvDnqgI';

navigator.serviceWorker
		&& navigator.serviceWorker.register('./sw.js').then(
				function(registration) {
					console.log('Excellent, registered with scope: ',
							registration.scope);
				});

navigator.serviceWorker && navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {  
	  serviceWorkerRegistration.pushManager.getSubscription()  
	    .then(function(subscription) {  
	    	 if (subscription) {
	    	        console.info('Got existing', subscription);
	    	        window.subscription = subscription;
	    	        return;  // got one, yay
	    	      }

	    	      const applicationServerKey = urlB64ToUint8Array(publicKey);
	    	      serviceWorkerRegistration.pushManager.subscribe({
	    	          userVisibleOnly: true,
	    	          applicationServerKey,
	    	      })
	    	        .then(function(subscription) { 
	    	          console.info('Newly subscribed to push!', subscription);
	    	          window.subscription = subscription;
	    	        });
	    });
	});