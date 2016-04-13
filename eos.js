
function AccountController($scope, $http) {//debugger;
	
	
	
	$scope.loadAccounts = function(){
		$http({
			method: 'GET'
			,url: 'http://localhost:8080/EOS/ActiveDirectory/findByLocation'
			,params: {location: 'Canada'}
		}).success(function(data) {			
			if($scope.adaccounts==null){
				$scope.adaccounts = [];
			}
			for(var i=0; i<data.length; i++){
				$scope.adaccounts.push(data[i]);
			}			
		});
    };
    
    $scope.loadAccounts();
}
